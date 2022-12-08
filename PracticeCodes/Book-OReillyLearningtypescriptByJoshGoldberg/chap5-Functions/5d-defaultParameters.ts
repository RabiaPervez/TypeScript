function rateSong(song: string, rating=0) {
    console.log(`Rating ${song} with ${rating} stars`);
};

rateSong("The Best Song Ever", 5);
rateSong("The Best Song Ever");
rateSong("The Best Song Ever", undefined);
//(error) rateSong("The Best Song Ever", null);
// (error) rateSong("The Best Song Ever", 'hello');