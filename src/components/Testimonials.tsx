import { Icon } from "@iconify/react/dist/iconify.js";

export default function Testimonials() {
    return (
        <div id="testimonials" className="w-full flex flex-col">
            <div className="w-full flex flex-col sm:flex-row items-start justify-between">
                <div className="text-4xl text-black font-semibold whitespace-pre-line">{"Don't take my word\nfor it"}</div>
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-20 mt-4">
                    <div className="text-accent font-medium text-xl">{"[Testimonials]"}</div>
                    <div>
                        <div className="text-black text-base sm:w-96">
                            {"Here's what my clients say about our collaboration. Their satisfaction and meeting expectations are my top priorities, ensuring the best experience possible."}
                        </div>
                        <div className="w-fit mt-10 px-2 py-1 rounded-lg bg-black/75 text-white flex items-center gap-4">
                            <div>{"Let's discuss"}</div>
                            <div className="text-4xl rounded from-primary to-secondary bg-gradient-to-br">
                                <Icon icon="iconamoon:arrow-right-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full hidden sm:flex items-end justify-center gap-20 mt-8">
                <div className="bg-black px-4 py-2 rounded-full text-white">Prev</div>
                <div className="bg-black rounded-xl p-4 w-1/2">
                    <div className="text-white text-base">{"Lorem ipsum dolor sit amet. Et corporis voluptas non possimus aliquam qui fugiat atque eum doloribus omnis et soluta voluptatibus. Est totam galisum ut perferendis enim aut aspernatur eveniet id animi architecto ut iusto adipisci."}</div>
                    <div className="w-full flex items-center justify-between mt-4">
                        <div className="text-white text-xl">Client 123</div>
                        <div className="text-accent font-medium">Web Development</div>
                    </div>
                </div>
                <div className="bg-black px-4 py-2 rounded-full text-white">Next</div>
            </div>
        </div>
    )
}