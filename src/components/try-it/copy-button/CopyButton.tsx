"use client";

type CopyButtonProps = {
    url: string;
};

export default function CopyButton({ url }: CopyButtonProps) {
    function copyRequestURL() {
        navigator.clipboard.writeText(url);
    }

    return (
        <button className="absolute right-5 z-10 mx-3 my-5 rounded-lg px-3.5 py-1.5 bg-base-200 hover:bg-base-300" onClick={copyRequestURL}>
            Copy URL
        </button>
    );
}
