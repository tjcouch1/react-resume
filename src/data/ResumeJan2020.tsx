import { IResume } from "../types/Resume";

export const resumeJan2020: IResume = {
    id: 'Jan2020',
    columns: [
        {
            id: 'basicInfoCol',
            rows: [
                {
                    id: 'titleRow',
                    sections: [
                        {
                            id: 'title',
                            heading: 'TJ Couch'
                        }
                    ]
                },
                {
                    id: 'contactInfoRow',
                    sections: [
                        {
                            id: 'contactInfo'
                        }
                    ]
                },
                {
                    id: 'skillsRow',
                    sections: [
                        {
                            id: 'skills',
                            heading: 'Skills'
                        }
                    ]
                },
                {
                    id: 'educationRow',
                    sections: [
                        {
                            id: 'education',
                            heading: 'Education'
                        }
                    ]
                },
                {
                    id: 'interestsRow',
                    sections: [
                        {
                            id: 'interests',
                            heading: 'Interests'
                        }
                    ]
                }
            ]
        },
        {
            id: 'stuffCol',
            rows: [
                {
                    id: 'experienceRow',
                    sections: [
                        {
                            id: 'experience',
                            heading: 'Experience'
                        }
                    ]
                },
                {
                    id: 'projectsRow',
                    sections: [
                        {
                            id: 'projects',
                            heading: 'Projects'
                        }
                    ]
                },
                {
                    id: 'communityRow',
                    sections: [
                        {
                            id: 'community',
                            heading: 'Community'
                        }
                    ]
                }
            ]
        }
    ]
};