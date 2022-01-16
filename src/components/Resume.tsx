import { IResume } from "../types/Resume";

export function Resume (props: IResume) {
    const {
        id,
        columns
    } = props;

    return <div className="resume">
        <h1>
            {id}
        </h1>
    </div>;
}
