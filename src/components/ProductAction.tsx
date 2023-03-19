import Image from "next/image";



export default function ProductAction({ id }: { id: string}) {
    const handleClick = () => {
        const url = `https://kodadot.xyz/bsx/gallery/${id}`;
        window.open(url, '_blank')
      };

    return (
        <button
          onClick={handleClick}
          className={`w-full bg-gray-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-900`}
        >
          Visit on Kodadot
        </button>
      );

}