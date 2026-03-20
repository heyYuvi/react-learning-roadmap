export const Profile = ({ profileInfo, socialInfo }) => {

    return (
        <div className="w-full flex items-center justify-center min-h-screen bg-gray-200">
            <div className="shadow-lg w-96 h-100 rounded-md bg-gray-50 relative  overflow-hidden">
                <div className="bg-red-400 h-32"></div>
                <div className="absolute top-20 left-1/2 -translate-x-1/2 ">
                    <img src="https://i.pinimg.com/1200x/27/43/19/274319cc12b4bfd7874b15b897456e2c.jpg" alt="profile" className="w-32 h-32 rounded-full mx-auto object-cover" />
                </div>
                <div className="flex justify-center mt-24 mb-4">
                    {
                        profileInfo.map((info, index) => (
                            <div key={index} className="text-center">
                                <div className="flex mb-4 items-center gap-2 justify-center">
                                    <h3 className="font-bold text-xl text-gray-800">{info.name}</h3>
                                    <h3 className="font-semibold text-2xl text-gray-500">{info.age}</h3>
                                </div>
                                <h3 className="text-2xl text-gray-500">{info.city}</h3>
                            </div>
                        ))
                    }
                </div>
                <div className="border-t border-gray-300">
                    {
                        socialInfo.map((info, index) => {
                            return (
                                <div key={index} className="flex justify-around mt-3">
                                    <div className="flex flex-col text-center">
                                        <h2 className="font-bold text-2xl">{info.followers}</h2>
                                        <h3>Followers</h3>
                                    </div>
                                    <div className="flex flex-col text-center">
                                        <h3 className="font-bold text-2xl">{info.likes}</h3>
                                        <h3>Likes</h3>
                                    </div>
                                    <div className="flex flex-col text-center">
                                        <h3 className="font-bold text-2xl">{info.photos}</h3>
                                        <h3>Photos</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}