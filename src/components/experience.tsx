import { dataExperience } from "../../data";
import Title from "./shared/title";

const Experience = () => {
    return (
        <div className="p-6 md:px-12 md:py-15 max-w-5xl mx-auto">
            <Title title="Experience" subtitle="My skills" />

            <div className="grid md:grid-cols-2 gap-8 mt-10">
                {dataExperience.map((data) => (
                    <div
                        key={data.id}
                        className="border border-white-10 rounded-xl p-6 shadow-md shadow-slate-100 dark:bg-slate-800"
                    >
                        <h3 className="text-xl font-bold mb-6">{data.title}</h3>
                        <div className="grid grid-cols-3 gap-6">
                            {data.experience.map((item, index) => (
                                <div key={index} className="flex justify-center">
                                    {item.icon}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience;