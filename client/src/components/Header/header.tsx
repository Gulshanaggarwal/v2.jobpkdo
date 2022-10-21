

export default function Header() {
    return (
        <header className="bg-grey-main flex justify-between items-center px-5 py-4">
            <h1 className="font-extrabold">
                <span className="text-orange-main">JOB</span>
                <span className="text-black-main">PKDO</span>
            </h1>
            <button className="bg-violet-main text-grey-main rounded-full px-3 py-1 text-xs">Signup</button>
        </header>
    )
}