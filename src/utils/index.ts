export const mapExperiences = (exp: string) => {
    return exp.replaceAll(" ", "").replace("-", "_")
}
