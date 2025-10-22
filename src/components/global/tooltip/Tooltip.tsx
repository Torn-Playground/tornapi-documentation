import type { Placement } from "@floating-ui/react";
import {
    autoUpdate,
    FloatingPortal,
    flip,
    offset,
    shift,
    useDismiss,
    useFloating,
    useFocus,
    useHover,
    useInteractions,
    useMergeRefs,
    useRole,
} from "@floating-ui/react";
import { cloneElement, createContext, forwardRef, type HTMLProps, isValidElement, type ReactNode, type Ref, useContext, useMemo, useState } from "react";

interface TooltipOptions {
    initialOpen?: boolean;
    placement?: Placement;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export function useTooltip({ initialOpen = false, placement = "top", open: controlledOpen, onOpenChange: setControlledOpen }: TooltipOptions = {}) {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);

    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = setControlledOpen ?? setUncontrolledOpen;

    const data = useFloating({
        placement,
        open,
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        middleware: [offset(5), flip({ crossAxis: placement.includes("-"), fallbackAxisSideDirection: "start", padding: 5 }), shift({ padding: 5 })],
    });

    const context = data.context;

    const hover = useHover(context, { move: false, enabled: controlledOpen == null });
    const focus = useFocus(context, { enabled: controlledOpen == null });
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: "tooltip" });

    const interactions = useInteractions([hover, focus, dismiss, role]);

    return useMemo(() => ({ open, setOpen, ...interactions, ...data }), [open, setOpen, interactions, data]);
}

type ContextType = ReturnType<typeof useTooltip> | null;

const TooltipContext = createContext<ContextType>(null);

export const useTooltipContext = () => {
    const context = useContext(TooltipContext);

    if (context == null) {
        throw new Error("Tooltip components must be wrapped in <Tooltip />");
    }

    return context;
};

export function Tooltip({ children, ...options }: { children: ReactNode } & TooltipOptions) {
    const tooltip = useTooltip(options);

    return <TooltipContext.Provider value={tooltip}>{children}</TooltipContext.Provider>;
}

export const TooltipTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement> & { asChild?: boolean }>(function TooltipTrigger(
    { children, asChild = false, ...props },
    propRef,
) {
    const context = useTooltipContext();
    // biome-ignore lint/suspicious/noExplicitAny: legacy
    const childrenRef: Ref<any> = (children as any).ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    // `asChild` allows the user to pass any element as the anchor
    if (asChild && isValidElement(children)) {
        return cloneElement(
            children,
            context.getReferenceProps({
                ref,
                ...props,
                ...(typeof children.props === "object" ? children.props : {}),
                // @ts-expect-error test
                "data-state": context.open ? "open" : "closed",
            }),
        );
    }

    return (
        <button
            ref={ref}
            // The user can style the trigger based on the state
            data-state={context.open ? "open" : "closed"}
            {...context.getReferenceProps(props)}
        >
            {children}
        </button>
    );
});

export const TooltipContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(function TooltipContent({ style, ...props }, propRef) {
    const context = useTooltipContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);

    if (!context.open) return null;

    return (
        <FloatingPortal>
            <div
                ref={ref}
                style={{
                    ...context.floatingStyles,
                    ...style,
                }}
                {...context.getFloatingProps(props)}
            />
        </FloatingPortal>
    );
});
