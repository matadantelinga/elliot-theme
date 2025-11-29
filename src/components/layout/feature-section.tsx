import FeatureItem from "./feature-item";

export default function FeatureSection() {
  return (
    <div className="flex flex-col gap-4 py-10 lg:flex-row">
      <div className="col-span-4">
        <FeatureItem
          title="Loki's Enchantment"
          description="Landing a Loki Enchantment symbol will turn the symbol into a wild and activate the global multi"
          image="/icons/loki-enchance.svg"
        />
      </div>
      <div className="col-span-4">
        <FeatureItem
          title="Golden Bonus"
          description="Sometimes when triggering the bonus, randomly turn it into a golden bonus. (1:1000)"
          image="/icons/golden-bonus.svg"
        />
      </div>
      <div className="col-span-4">
        <FeatureItem
          title="Extra Chance"
          description="Remove 1 line from the bottom and tumble in a new line up top, until both scatters exit the screen."
          image="/icons/extra-changes.svg"
        />
      </div>
    </div>
  );
}
