import Footer from "./Footer";
import NavBar from "./NavBar";

const AddMovie = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const genre = form.genre.value;
        const poster = form.poster.value;
        const duration = form.duration.value;
        const year = form.year.value;
        const rating = form.rating.value;
        const summary = form.summary.value;
        console.log(title, genre, poster, duration, year, rating, summary)
    };

    return (
        <div>
            <NavBar></NavBar>
            <h1>Add</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-4">
                    <div>
                        <div>
                        <input name="title" className="input input-bordered join-item" placeholder="Title" />
                        </div>
                    </div>
                    <select name="genre" className="select select-bordered join-item">
                        <option disabled selected>Genre</option>
                        <option>Sci-fi</option>
                        <option>Drama</option>
                        <option>Action</option>
                        <option>Romance</option>
                        <option>Fantasy</option>
                        <option>History</option>
                        <option>Reality</option>
                        <option>Documentary</option>
                        <option>Mystery</option>
                    </select>
                </div>
                <div className="flex gap-4">
                    <div>
                        <div>
                        <input name="poster" className="input input-bordered join-item" placeholder="Poster URL" />
                        </div>
                    </div>
                    <div>
                        <div>
                        <input name="duration" className="input input-bordered join-item" placeholder="Duration (minutes)" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <select name="year" className="select select-bordered join-item">
                        <option disabled selected>Released Year</option>
                        <option>2024</option>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                        <option>2012</option>
                        <option>2011</option>
                        <option>2010</option>
                        <option>2009</option>
                        <option>2008</option>
                        <option>2007</option>
                        <option>2006</option>
                        <option>2005</option>
                        <option>2004</option>
                        <option>2003</option>
                        <option>2002</option>
                        <option>2001</option>
                        <option>2000</option>
                    </select>
                    <div>
                        <div>
                        <input name="rating" className="input input-bordered join-item" placeholder="Rating (1-5)" />
                        </div>
                    </div>
                </div>
                <textarea name="summary" className="textarea textarea-bordered" placeholder="Summary"></textarea>
                <input className="btn" type="submit" value="Add Movie"/>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddMovie;