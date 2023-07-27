import Card from './Card'

function Tours({tours ,removeTour}) {
    return(
        <div className='container'>
             <div>
            <h2 className='title'>Plan with Ayush</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour) => {
                        return <Card key ={tour.id}{...tour} removeTour={removeTour}></Card>
                        //pure ke pure tour object ki copy pass kar di ...tour likhne se
                    })
                }
            </div>
        </div>
       
    )
}

export default Tours;