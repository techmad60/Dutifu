
export default function FormButton ({ButtonText=""}) {
    return (
        <button type="submit" className={`flex font-medium bg-color-five w-full justify-center self-center text-sm duration-300 hover:bg-color-eleven shadow-md my-6 py-6 px-3 rounded-sm text-white`}>
            {ButtonText}
        </button>
       
    )
}