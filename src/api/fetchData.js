export default function fetchData(url) {

    return fetch(url)

        .then(response => {

            if (!response.ok) {

                throw new Error(`There was an error in fetching data: server responded with ${response.status} status code.`);

            }

            return response.json();

        });

}