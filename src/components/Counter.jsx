function Counter(){
    return(
        <div className="flex w-full sm:w-1/4 bg-[#f7f8fd] justify-between items-center p-4 rounded-lg flex-grow text-orange-500  font-bold">
            <button className="text-3xl transition-colors hover:text-orange-300">-</button>
            <p className="text-black">0</p>
            <button className="text-3xl transition-colors hover:text-orange-300">+</button>
        </div>
    )
}

export default Counter;