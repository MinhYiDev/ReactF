import "./index.scss";

interface ResponseData<T> {
    _id?: string;
    netId: string | number;
    content: string;
    createdDate: T | string;
    updateDate: T | string;
    map?: () => void;
}

type ExtendsR = ResponseData<string>;

function Navbar() {
    // const [data, setData] = useState<ResponseData<Date>[]>([]);
    const testData: ExtendsR[] = [
        {
            _id: "asdgadfcx5dd6s",
            netId: 1,
            content: "adhadadhadadhadadhadadhadadhadadhadadhadadhadadhad",
            createdDate: "Mon Aug 12 2024 13:21:47 GMT+0700 (Indochina Time)",
            updateDate: "Mon Aug 12 2024 13:21:47 GMT+0700 (Indochina Time)",
        },
        {
            _id: "asdgadfcx5dd6s",
            netId: 1,
            content: "adhadadhadadhadadhadadhadadhadadhadadhadadhadadhad",
            createdDate: "Mon Aug 12 2024 13:21:47 GMT+0700 (Indochina Time)",
            updateDate: "Mon Aug 12 2024 13:21:47 GMT+0700 (Indochina Time)",
        },
        {
            _id: "asdgadfcx5dd6s",
            netId: 1,
            content: "adhadadhadadhadadhadadhadadhadadhadadhadadhadadhad",
            createdDate: "Mon Aug 12 2024 13:21:47 GMT+0700 (Indochina Time)",
            updateDate: "Mon Aug 12 2024 13:21:47 GMT+0700 (Indochina Time)",
        },
        {
            _id: "asdgadfcx5dd6s",
            netId: 1,
            content: "adhadadhadadhadadhadadhadadhadadhadadhadadhadadhad",
            createdDate: "Mon Aug 12 2024 13:21:47 GMT+0700 (Indochina Time)",
            updateDate: "Mon Aug 12 2024 13:21:47 GMT+0700 (Indochina Time)",
        },
    ];

    // useEffect(() => {
    //     setData([
    //         {
    //             _id: "asdgadfcx5dd6s",
    //             netId: 1,
    //             content: "adhadadhadadhadadhadadhadadhadadhadadhadadhadadhad",
    //             createdDate:
    //                 "Mon Aug 12 2024 13:21:47 GMT+0700 (Indochina Time)",
    //             updateDate:
    //                 "Mon Aug 12 2024 13:21:47 GMT+0700 (Indochina Time)",
    //         },
    //     ]);
    // }, [data]);

    return (
        <div className="nav_bar text-3xl flex ">
            <ul>
                <li>HOME</li>
                <li>LOGIN</li>
            </ul>

            <div className="text__box_p flex columns-1">
                {testData?.map((item) => (
                    <p>{item.content}</p>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
