import { addExperience } from "@/actions/experienceActions";

const ExperienceForm = () => {
    return (
        <form action={addExperience}>
            <input type="text" name="title" placeholder="enter job title" />
            <input
                type="text"
                name="company"
                placeholder="enter company name"
            />
            <input
                type="text"
                name="location"
                placeholder="enter location / remote"
            />
            <input type="text" name="startDate" placeholder="enter year from" />
            <input type="text" name="endDate" placeholder="enter year until" />
            <textarea
                name="description"
                rows={2}
                placeholder="description..."
            />
            <button type="submit">Add experience</button>
        </form>
    );
};
export default ExperienceForm;
