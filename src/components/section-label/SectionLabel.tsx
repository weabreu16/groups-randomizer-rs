import React from 'react';
import "./SectionLabel.css";

interface Props {
    className?: string;
    label: string;
    icon: React.ReactNode;
}

export function SectionLabel(props: Props) {
    return (
        <div className={props.className}>
            <div className="section-label">
                <div className="section-icon">
                    {props.icon}
                </div>
                <p className="label">
                    {props.label}
                </p>
            </div>
        </div>
    )
}
