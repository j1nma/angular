export class CounterService {
    activeToInactive: number = 0;
    inactiveToActive: number = 0;

    public incrementActiveToInactive() {
        this.activeToInactive++;
        console.log(this.activeToInactive);
    }

    public incrementIactiveToActive() {
        this.inactiveToActive++;
        console.log(this.inactiveToActive);
    }

}