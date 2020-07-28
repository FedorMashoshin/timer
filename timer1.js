process.argv.forEach((val, index) => {
        if (index > 1 && val > 0) {
            let time = val * 1000;
            setTimeout(()=>{
                    process.stdout.write('\x07')
                }, time)
        };       
});
