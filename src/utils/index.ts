export const mapExperiences = (exp: string) => {
    return (exp as any)?.replaceAll(" ", "").replace("-", "_")
}
