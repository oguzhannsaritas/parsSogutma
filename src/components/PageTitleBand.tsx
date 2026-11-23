export default function PageTitleBand({ title }: { title: string }) {
    return (
        <header className="pars-band mb-8 py-4 transition-colors duration-300 md:mb-12 md:py-16">
            <div className="container mx-auto px-4 text-center sm:px-6 md:px-8 lg:px-12">
                <h1 className="break-words text-lg font-bold md:text-4xl">{title}</h1>
            </div>
        </header>
    );
}
