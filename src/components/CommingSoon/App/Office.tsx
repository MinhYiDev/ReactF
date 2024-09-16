import { Card } from "antd";

const { Meta } = Card;

const handleClick = (url: string) => {
    window.location.href = url;
};

const Office: React.FC = () => {
    const arr = Array(10).fill(0);

    const downloadUrls: string[] = [
        "https://example.com/download1",
        "https://example.com/download2",
        "https://example.com/download3",
        "https://example.com/download4",
        // Thêm nhiều URL nếu cần
    ];

    return (
        <div className="flex w-full flex-wrap justify-center gap-5">
            {arr.map((item, index) => (
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                        <img
                            alt="example"
                            src="https://nld.mediacdn.vn/thumb_w/698/2014/office-365-logo-gallery-100266091-large-1414577213332.jpg"
                        />
                    }
                    key={index + item}
                    onClick={() =>
                        handleClick(downloadUrls[index % downloadUrls.length])
                    } // Chọn URL từ mảng
                >
                    <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                    />
                </Card>
            ))}
        </div>
    );
};

export default Office;
