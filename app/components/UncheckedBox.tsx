export default function EmptyBox () {
    return (
        <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="hidden" />
            <div className="w-6 h-6 border-2 border-color-eleven rounded-md"></div>
        </label>
    )

}