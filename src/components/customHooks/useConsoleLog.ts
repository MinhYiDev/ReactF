function useConsoleLog() {
    console.log(
        "%cHello!🥳 WELCOME GO TO PSANG",
        "color:green;font-size:20px;font-weight:bold;"
    );
    console.log(
        "%cWelcome to : %chttps://psang.click",
        "font-weight:bold",
        "text-transform:underline"
    );
    return () => {};
}

export default useConsoleLog;
