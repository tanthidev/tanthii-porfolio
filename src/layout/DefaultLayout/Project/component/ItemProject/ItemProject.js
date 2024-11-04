function ItemProject({project, handleProjectClick}) {
    return ( 
        <div className='card  relative h-fit select-none duration-300 ease-in-out hover:scale-125'>
            <h2>{project.name}</h2>
            <img src={project.image} alt={project.name}/> 
            <div onClick={() => handleProjectClick(project)} className="absolute w-full h-16 bottom-0 right-0 bg-gray-300 text-black flex items-center">
                <button class="download-button transform active:scale-95 bg-gray-500 hover:bg-gray-400 text-white px-16 py-6 rounded-lg font-bold tracking-widest w-full">
                    <div class="flex justify-center items-center relative">
                    <div class="button-copy pl-2 leading-none uppercase">SEE DETAIL</div>
                    </div>
                </button>
            </div>
        </div>
     );
}

export default ItemProject;