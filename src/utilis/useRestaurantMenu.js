import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await fetch(
              `https://www.google-analytics.com/g/collect?v=2&tid=G-X3K3CELKLV&gtm=45je5at1v899482468za200zb77032815zd77032815&_p=1762187937812&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1303963137.1761929033&ul=en-gb&sr=278x610&uaa=&uab=64&uafvl=Google%2520Chrome%3B141.0.7390.123%7CNot%253FA_Brand%3B8.0.0.0%7CChromium%3B141.0.7390.123&uamb=1&uam=Nexus%205&uap=Android&uapv=6.0&uaw=0&are=1&frm=0&pscdl=&_eu=AEAAAAQ&tag_exp=101509157~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~115480709~115583767~115938465~115938469~116217636~116217638~116253087~116253089~116254370&sid=1762187938&sct=3&seg=0&dl=https%3A%2F%2Fwww.swiggy.com%2Fcity%2Fnoida%2Fpizza-hut-baner-crossings-republik-rest224104&dt=Order%20Food%20Online%20from%20India%27s%20Best%20Food%20Delivery%20Service%20%7C%20Swiggy&_s=2&tfd=5905`
            );
            const data = await response.json();
            console.log(data);
            setMenu(data);
        };
        fetchMenu();
    }, [resId]);

    return menu;
}

export default useRestaurantMenu;