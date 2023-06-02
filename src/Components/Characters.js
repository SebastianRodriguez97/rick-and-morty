export default function Characters(props) {
    const { characters, setCharacters, location, episode } = props;
    const resetCharacters = () => {
        setCharacters(null);
    }

    const GetEpisode = (url) => {
        url = url.split("/");
        let idEpisode = url[url.length - 1];

        const objEpisode = episode.find(epi => epi.id == idEpisode);
        return (
            <>
                <span>{ objEpisode?.name ?? "" }</span>
                <span>{ objEpisode?.air_date ?? "" }</span>
            </>
        );
    }

    const GetLocation = (url) => {
        url = url.split("/");
        let idLocation = url[url.length - 1];

        const objLocation = location.find(loc => loc.id == idLocation);
        return (
            <>
                <span>{ objLocation?.name ?? "" }</span>
                <span>{ objLocation?.created ?? "" }</span>
            </>
        );
    }

    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={ resetCharacters }>
                Volver a home
            </span>
            <div className="container-characters">
                { characters.map((characters, index) => (

                    <div className="character-container" key={ index }>
                        <div>
                            <img src={ characters.image } alt={ characters.name } />
                        </div>
                        <div>
                            <h3>{ characters.name }</h3>
                            <h6>
                                { characters.status === "Alive" ? (
                                    <>
                                        <span className="alive" />
                                        Alive
                                    </>
                                ) : (
                                    <>
                                        <span className="dead" />
                                        Dead
                                    </>
                                ) }
                            </h6>
                            <p>
                                <span className="text-grey">Episodios:</span>
                                <span>{ characters.episode.length }</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie:</span>
                                <span>{ characters.species }</span>
                            </p>
                            <p>
                                <span className="text-grey">Tipo:</span>
                                <span>{ characters.type === "" ? "Not specified" : characters.type }</span>
                            </p>
                            <p>
                                <span className="text-grey">Género:</span>
                                <span>{ characters.gender }</span>
                            </p>
                            <p>
                                <span className="text-grey">Origen:</span>
                                <span>{ characters.origin.name }</span>
                            </p>
                            <p>
                                <span className="text-grey">Creación:</span>
                                <span>{ characters.created }</span>
                            </p>
                            <p>
                                <span className="text-grey" >Ubicación:</span>
                                { GetLocation(characters.location.url) }
                            </p>
                            <p>
                                <span className="text-grey" >Episodios:</span>
                                {
                                    characters.episode.map((item, index) => {
                                        return <span key={ index }>
                                            { GetEpisode(item) }
                                        </span>
                                    })
                                }
                            </p>
                        </div>
                    </div>
                )) }
            </div>

            <span className="back-home" onClick={ resetCharacters }>
                Volver a home
            </span>
        </div>
    );
}