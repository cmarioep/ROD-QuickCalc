export const WiresOnConduit = ({ wiresInfo }) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Calibre AWG</th>
                    <th>Aislamiento</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                {wiresInfo.map((wire, index) => (
                    <tr key={index}>
                        <td><select id="awg" name="awg" defaultValue={wire.awg} >
                            <option value="">Seleccionar</option>
                            <option value="14">14</option>
                            <option value="12">12</option>
                            <option value="10">10</option>
                            <option value="8">8</option>
                            <option value="6">6</option>
                            <option value="4">4</option>
                            <option value="2">2</option>
                            <option value="1/0">1/0</option>
                            <option value="2/0">2/0</option>
                            <option value="4/0">4/0</option>
                            <option value="250">250</option>
                            <option value="300">300</option>
                            <option value="350">350</option>
                            <option value="500">500</option>
                            <option value="750">750</option>
                        </select></td>
                        <td>{wire.isolation}</td>
                        <td>{wire.quantity}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

}