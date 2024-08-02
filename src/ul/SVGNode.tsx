const SVGNode = (svg: string) => {
    return (
        <span dangerouslySetInnerHTML={{ __html: svg }} />
    )
}

export default SVGNode