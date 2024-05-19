function generateReferralCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generateReferralCodesBatch(batchSize) {
    const referralCodes = [];
    for (let i = 0; i < batchSize; i++) {
        referralCodes.push(generateReferralCode());
    }
    return referralCodes;
}

function logReferralCodes(totalUsers) {
    const batchSize = 10000;
    let processedUsers = 0;

    while (processedUsers < totalUsers) {
        const remainingUsers = totalUsers - processedUsers;
        const currentBatchSize = Math.min(batchSize, remainingUsers);
        const referralCodes = generateReferralCodesBatch(currentBatchSize);

        
        console.log(`Batch ${processedUsers / batchSize + 1}:`);
        referralCodes.forEach((code, index) => {
            console.log(`${processedUsers + index + 1}: ${code}`);
        });

        processedUsers += currentBatchSize;
    }
}

// Generate and log referral codes for 10 million users
logReferralCodes(10000000);
