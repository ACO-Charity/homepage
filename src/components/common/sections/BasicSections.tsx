import {PropsWithChildren} from 'react';
import {Fade} from 'react-awesome-reveal';
import ReactVisibilitySensor from 'react-visibility-sensor';
import {useSection} from '../../../stores/SectionStore.ts';
import './sections.scss';

export interface BasicSectionsProps extends PropsWithChildren {
    sectionId: string;
    sectionImage: string;
    sectionTitle: string;
}

const BasicSections = (props: BasicSectionsProps) => {
    const {setCurrentSection} = useSection();
    const revealed = (sensorData: boolean) => {
        if (sensorData) {
            setCurrentSection(props.sectionId);
        }
    };

    return (
        <ReactVisibilitySensor onChange={revealed}
                               partialVisibility={true}
                               offset={{
                                   top: 500,
                                   bottom: 500
                               }}
                               minTopValue={200}>
            <section id={props.sectionId}>
                {
                    props.sectionImage &&
                    <div className="section-image-container" style={{backgroundImage: 'url(' + props.sectionImage + ')'}}>
                    </div>
                }
                <Fade>
                    <div className="section-content container jumbotron">
                        <div className="section-title">
                            <h2 className="title-shadow text-center">{props.sectionTitle}</h2>
                            <h2 className="title-text text-center">{props.sectionTitle}</h2>
                        </div>
                        <hr/>
                        {props.children}
                    </div>
                </Fade>
            </section>
        </ReactVisibilitySensor>
    );
};

export default BasicSections;