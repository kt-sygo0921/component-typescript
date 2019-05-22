declare namespace JSX{
    interface IntrinsicElements{
        'test-element': {text?: String}
    }
    interface IntrinsicElements{
        'sidebar-element': {
            guest?: String
            adminTopics?: String
            banners?:String
        }
    }

    interface IntrinsicElements{
        'sidebar-button': {
            children:string
            class?:string
            to:string
            rank:string
            scale:string
            full:true
        }
    }
}