import SubHeader from "../../components/SubHeader/SubHeader";
import CrawlLine from "../../components/CrawlLine/CrawlLine";
import StrategyBlock from "../../components/StrategyBlock/StrategyBlock";
import './Main.module.css';

const Main = () => {
    return (
        <main>
            <SubHeader />
            <CrawlLine />
            <StrategyBlock />
        </main>
    )
};

export default Main;