

type ListProps = {
    title: string;
    items: string[];
    
}

const List = ({ title, items}: ListProps) => {

    return (
        <div>
            <h1 className="text-gray-100 text-xl pt-3 font-bold flex justify-center items-center">{title}</h1>
            <div>
                <ul className='flex flex-wrap text-center'>
                    {items.map((item, index) => (
                        <li key={index} className="py-2 px-2 ">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default List;
