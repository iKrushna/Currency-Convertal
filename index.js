var select = document.getElementsByClassName("currency");
        var input_currency = document.getElementById("input_currency");
        var output_currency = document.getElementById("output_currency");
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/currencies`)
            .then((data) => data.json())
            .then((data) => {
                const entries = Object.entries(data);
                // console.log(entries);
                // alert(`10 GBP = ${data.rates.USD} USD`);
                for (let i = 0; i < entries.length; i++) {
                    select[0].innerHTML += `<option value = "${entries[i][0]}">${entries[i][0]}</option>`;
                    select[1].innerHTML += `<option value = "${entries[i][0]}">${entries[i][0]}</option>`;
                }
            });
        function convert() {
            var input_currency_val = input_currency.value;
            if (select[0].value != select[1].value) {
                // alert("right");
                const host = 'api.frankfurter.app';
                fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`)
                    .then((val) => val.json())
                    .then((val) => {
                        output_currency.value = Object.values(val.rates)[0];
                        console.log(Object.values(val.rates)[0]);
                    });
            }
            else {
                alert("Please select two different currency");
            }
        }