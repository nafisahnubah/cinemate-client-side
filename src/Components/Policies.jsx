import Footer from "./Footer";
import NavBar from "./NavBar";

const Policies = () => {
    return (
        <div className='bg-teal-100'>
            <NavBar></NavBar>
            <h1 className='underline decoration-double decoration-teal-700 md:px-96 my-6 text-center font-extrabold text-4xl'>Our Policies</h1>
            <p className="md:mx-12 text-center my-4 text-lg">Welcome to CineMate! We aim to provide a seamless and enjoyable experience for movie enthusiasts. Our policies ensure transparency, security, and ease of use for everyone. By using our platform, you agree to the following policies:</p>
            <div className="card bg-teal-50 my-4 md:mx-12 mx-4 rounded-sm">
                <div className="card-body">
                    <h2 className="card-title text-2xl">Exploring Movies</h2>
                    <ul className="text-lg">
                        <li>All users can browse our movie catalog freely.</li>
                        <li>We strive to provide accurate movie details, including genres, release years, ratings, and summaries. However, occasional discrepancies may occur due to data sources.</li>
                    </ul>
                </div>
            </div>
            <div className="card bg-teal-50 my-4 md:mx-12 mx-4 rounded-sm">
                <div className="card-body">
                    <h2 className="card-title text-2xl">Viewing Movie Details</h2>
                    <ul className="text-lg">
                        <li>Users can access in-depth information about movies, including posters, descriptions, ratings, and more, to make informed choices.</li>
                        <li>Our movie details are organized for easy navigation across devices.</li>
                    </ul>
                </div>
            </div>
            <div className="card bg-teal-50 my-4 md:mx-12 mx-4 rounded-sm">
                <div className="card-body">
                    <h2 className="card-title text-2xl">Adding Movies</h2>
                    <ul className="text-lg">
                        <li>Registered users can add new movies to the portal to expand the catalog.</li>
                        <li>Submissions must align with our community standards. Any offensive or inaccurate data will be removed.</li>
                        <li>We reserve the right to verify and edit user-submitted content for quality and consistency.</li>
                    </ul>
                </div>
            </div>
            <div className="card bg-teal-50 my-4 md:mx-12 mx-4 rounded-sm">
                <div className="card-body">
                    <h2 className="card-title text-2xl">Managing Favorites</h2>
                    <ul className="text-lg">
                        <li>Users can add movies to their favorites list for quick access.</li>
                        <li>Users can add or remove movies from their favorites at any time.</li>
                        <li>Favorite lists are linked to user accounts and are not visible to other users.</li>
                    </ul>
                </div>
            </div>
            <div className="card bg-teal-50 my-4 md:mx-12 mx-4 rounded-sm">
                <div className="card-body">
                    <h2 className="card-title text-2xl">Data Privacy</h2>
                    <ul className="text-lg">
                        <li>All user data, including email addresses and passwords, is stored securely.</li>
                        <li>We use your data solely to improve your experience and do not share it with third parties without consent.</li>
                    </ul>
                </div>
            </div>
            <div className="card bg-teal-50 my-4 md:mx-12 mx-4 rounded-sm">
                <div className="card-body">
                    <h2 className="card-title text-2xl">Updates to Policies</h2>
                    <p className="text-lg">We may update these policies periodically to enhance functionality and ensure compliance with regulations. Users will be notified of significant changes.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Policies;