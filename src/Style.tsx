import * as React from 'react';

const Style: React.FC = (): React.ReactElement => (
    <div>
        <style jsx>
            {`
                p {
                    font-size: 20px;
                }
            `}
        </style>
        <p>てすと</p>
    </div>
);

export default Style;
