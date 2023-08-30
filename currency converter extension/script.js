document.addEventListener("DOMContentLoaded", () => {
    console.log('main cllsss')

    const populate = async (value, currency) => {
        let myStr = "";
        const apiKey = "cur_live_vdMfEdaVt406B4lpPGzerrBFPn55SlfzyhZ1AN41";
        const apiUrl = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&currency=${currency}`;

        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`API Request Failed with status ${response.status}`);
            }

            const data = await response.json();
            document.querySelector(".output").style.display = "block";

            for (let key of Object.keys(data["data"])) {
                myStr += ` <tr>
                                <td>${key}</td>
                                <td>${data["data"][key]["code"]}</td>
                                <td>${Math.round(data["data"][key]["value"] * value)}</td>
                            </tr>`;
            }

            const tableBody = document.querySelector("tbody");
            tableBody.innerHTML = myStr;
        } catch (error) {
            // Handle errors, such as network issues or API request failure
            console.error("Error:", error);
        }
    };

    const btn = document.querySelector(".btn");
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const value = parseInt(document.querySelector("input[name='quality']").value);
        const currency = document.querySelector("select[name='Contry']").value;
        populate(value, currency);
    });
});
