export default function useScrollTo() {
    
    const scrollTo = (sectionID: string) => {
        const section = document.getElementById(sectionID);
        if (section) {
            const clientRects = section.getClientRects();
            const item = clientRects.item(0);
            if(item){
                window.scrollTo({
                    behavior: "smooth",
                    top: item.top - 40,
                });
            }
        }
    }

    return { scrollTo };
}