import { useEffect, useState } from "react"

const ListUser = ({ isAuthenticated = true }) => {
    const [datas, setDatas] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/todos');
                const data = await response.json();
                console.log("data api", data);
                setDatas(data.todos);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>

            <div>
                <h3>ListUsers</h3>




                <table className="table table-hover">
                    <thead>
                        <th > STT </th>
                        <th> Status </th>
                        <th> Todo</th>
                        <th> User ID </th>
                    </thead>
                    <tbody id="tbody">

                        {datas && datas.map(item => (
                            <tr>
                                <td> {item.id} </td>
                                <td> {item.completed}</td>
                                <td> {item.todo} </td>
                                <td> {item.userId} </td>
                            </tr>
                        )
                        )}

                    </tbody>
                </table>



            </div>
        </>


    )
}
export default ListUser