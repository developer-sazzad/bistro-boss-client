const TopCover = ({topCoverImg, topCoverTitle}) => {
    return (
        <div
            className="hero h-[500px]"
            style={{
                backgroundImage: `url(${topCoverImg})`,
            }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-9/12 bg-[#000000a1] py-10 px-20">
                    <h1 className="mb-5 text-5xl text-white font-bold uppercase">{topCoverTitle}</h1>
                    <p>
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TopCover;