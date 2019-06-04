declare namespace JSX {
    interface IntrinsicElements {
        'test-element': {text?: string};
    }
    interface IntrinsicElements {
        'sidebar-element': {
            guest?: string;
            adminTopics?: string;
            banners?: string;
        };
    }

    interface IntrinsicElements {
        'sidebar-button': {
            children: string;
            class?: string;
            to: string;
            rank: string;
            scale: string;
            full: true;
        };
    }
}
