/**
 * There are a lot of tradeoffs when moving your files to a module. My advice: don't do
 * it until you actually have to re-use components in a bunch of different places. see
 * pros and cons for using flow type modules below:
 *
 * Pro's: reusability and consistency across components
 * Con's: puts a burden on the reader/maintainer of your code since they have to constantly
 * reference a separate file, and they are given no hints in the file that imports the type. 
 */
type ShowPropsType = {
    title: string, // required props with a required value
    imdbID: string,
    poster: string,
    year: string,
    description: string, // optional props with optional values
    trailer?: ?string
};

type ShowStateType = {
    searchTerm?: string
};

export { ShowPropsType, ShowStateType };
