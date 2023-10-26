export default function Home() {
  return (
    <main className="container flex gap-4 p-8">
      <div className="flex flex-col gap-8 w-1/2">
        <div className="bg-base-200 rounded-lg p-8 shadow-lg">
          <h1 className="text-3xl mb-4">Dine filer</h1>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Fil navn</th>
                  <th>Opplastningsdato</th>
                  <th>Størrelse</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center text-center font-bold pb-1">
                      Ruter frontend
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center text-center font-bold pb-1">
                      05.11.2023
                    </div>
                  </td>
                  <td>37 MB</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center text-center font-bold pb-1">
                      Posten fullstack 
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center text-center font-bold pb-1">
                      17.09.2023
                    </div>
                  </td>
                  <td>12 MB</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center text-center font-bold pb-1">
                      DIP innkjøp
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center text-center font-bold pb-1">
                      23.10.2023
                    </div>
                  </td>
                  <td>40 MB</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center text-center font-bold pb-1">
                      Skatteettaten frontend
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center text-center font-bold pb-1">
                      09.10.2023
                    </div>
                  </td>
                  <td>25 MB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex  h-32  rounded">
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div className="bg-base-200 w-1/2 items-center p-8 rounded-lg">
        Område for forhåndsvisning av filer??
      </div>
    </main>
  );
}
