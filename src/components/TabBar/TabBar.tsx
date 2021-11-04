import './TabBar.scss';
import { useState } from 'react';

interface IIcon {
    activeUrl: string;
    deactiveUrl: string;
}
interface ITabBarProps {
    icons: IIcon[];
}

export const TabBar: React.FC<ITabBarProps> = ({ icons }) => {
    // state
    const [activeTab, setActiveTab] = useState(0);
    // render
    return (
        <div className="tab-bar">
            {icons.map((icon: IIcon, index: number) => (
                <div
                    className="tab-bar__item"
                    key={index}
                    onClick={() => setActiveTab(index)}
                >
                    {activeTab === index ?
                        <img src={icon.activeUrl} alt=" " /> :
                        <img src={icon.deactiveUrl} alt=" " />
                    }
                </div>
            ))}
        </div>
    );
}