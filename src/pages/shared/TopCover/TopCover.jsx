const TopCover = ({topCoverImg, topCoverTitle, topCoverDescription}) => {
    return (
        <div
            className="hero h-[500px]"
            style={{
                backgroundImage: `url(${topCoverImg})`,
            }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="md:min-w-3xl bg-[#000000a1] py-10 px-20">
                    <h1 className="mb-5 text-5xl text-white font-bold uppercase">{topCoverTitle}</h1>
                    <p className="uppercase">{topCoverDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default TopCover;