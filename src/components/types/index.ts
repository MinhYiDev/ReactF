interface IConst {
    url_net: string;
    url_shop: string;
    x_api_key: string;
    x_pre_key: string;
}

const CONST_GLOBAL: IConst = {
    url_net: "https://api.psang.click/v1/api/net",
    url_shop: "https://api.psang.click/v1/api/shop",
    x_api_key:
        "509687bad221218b816ce815402d6d8c8d4f6798c2c5be6c70c2da44b8ff024ff2b344084a97c514cc57d4df6e85681b63753fd396e90f4062b2c930df4344b6",
    x_pre_key: "0000",
};

export default CONST_GLOBAL;
