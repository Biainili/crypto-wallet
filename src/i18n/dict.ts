export type Lang = "en" | "ru" | "de";

export const labels: Record<Lang, Record<string, string>> = {
  en: {
    login: "Login",
    register: "Register",
    logout: "Logout",
    profileSettings: "Profile settings",
    email: "Email",
    password: "Password",
    name: "Name",
    confirmPassword: "Confirm password",
    signIn: "Sign in",
    createAccount: "Create account",
    goToLogin: "Already have an account?",
    goToRegister: "No account? Create one",
    welcome: "Welcome to your account",
    guestTitle: "Crypto Wallet",
    guestText: "Please login or create an account to continue.",
    profile: "Profile",
    myassetsUSDT: "My Assets USDT",
    depositUSDT: "Deposit USDT",
    applyforrefund: "Refund",
    "menu.deposit": "Deposit",
    "menu.withdraw": "Withdraw",
    "menu.transfer": "Internal Transfer",
    "menu.upgrade": "Membership",
    usdtMarket: "USDT Market",
    currency: "Currency",
    latestPrice: "Latest Price",
    change24h: "24h Change",
    loadingMarket: "Loading market…",
    guestDescTitle: "Why C-Wallet?",
    guestDesc1Title: "Fast & simple",
    guestDesc1Text: "Login in seconds and start tracking USDT pairs.",
    guestDesc2Title: "Real-time market",
    guestDesc2Text: "Live prices and 24h change, updated instantly.",
    guestDesc3Title: "Secure by design",
    guestDesc3Text: "Your session is protected and tokens are stored safely.",
    pleaseEnterUsername: "Please Enter Username",
    pleaseEnterEmail: "Please Enter Email",
    pleaseEnterPhoneNumber: "Please Enter Phone Number",
    pleaseEnterPassword: "Please Enter Password",
    pleaseConfirmPasswordAgain: "Please Confirm Password Again",
    pleaseEnterKeyPassword: "Please Enter Key Password",
    keyPasswordNote: "Note: The key password is your account's unique credential, it cannot be changed or retrieved. Please keep it safe!",
    pleaseConfirmKeyPasswordAgain: "Please Confirm Key Password Again",
    pleaseEnterVerification: "Please Enter Verification",
    refreshCaptcha: "Refresh",
    passwordsDoNotMatch: "Passwords do not match",
    keyPasswordsDoNotMatch: "Key passwords do not match",
    verificationIncorrect: "Verification is incorrect",
    code: "Code",
    pleaseEnterUsernameOrEmail: "Please Enter Username or Email",
    profileSettingsHint: "Update email, phone and password.",
    confirmWithKeyPassword: "Confirm with Key Password",
    contactInfo: "Contact info",
    phone: "Phone",
    changePassword: "Change password",
    changePasswordHint: "Leave empty if you don’t want to change it.",
    newPassword: "New password",
    confirmChanges: "Confirm changes",
    keyPasswordRequired: "Key Password is required to save changes.",
    keyPassword: "Key Password",
    saveChanges: "Save changes",
    back: "Back",
    messagesHint: "Your notifications and updates.",
    messagesFromCWallet: "From C-Wallet",
    messagesEmpty: "No messages yet.",
    msgWelcomeTitle: "Welcome to C-Wallet",
    msgWelcomeText: "We’re glad to have you on our platform. Start exploring the USDT market and your wallet features.",
    msgSecurityTitle: "Security reminder",
    msgSecurityText: "Never share your Key Password. Keep it safe — it can’t be recovered.",
    msgJustNow: "Just now",
    msgToday: "Today",
    fromCWallet: "From C-Wallet",
    fromSupport: "From Support",
    fromAdmin: "From Admin",
    quickBuy: "Quick Buy",
    qbWarning:
      "This site only supports USDT financial management and storage and withdrawal. When performing storage operations, please choose the USDT-TRX (USDT-TRC20) network for storage. If you deposit assets of other networks such as USDT-ERC20 (USDT-ETH) into this site address, your assets cannot be recovered. Please be aware.",
    qbPaxful: "Buy Tether (USDT) with a credit or debit card on Paxful",
    qbChangeNow: "Buy Tether (USDT) with a credit or debit card on ChangeNow",
    qbChangelly: "Buy Tether (USDT) with a credit or debit card on Changelly",
    qbBinance: "Buy Tether (USDT) with a credit or debit card on Binance Exchange",
    qbBybit: "Buy Tether (USDT) with a credit or debit card on Bybit Exchange",
    qbOKX: "Buy Tether (USDT) with a credit or debit card on OKX Exchange",
    helpCenter: "Help Center",
    helpCenterHint: "FAQ and platform instructions.",

    faqUsageQ: "Platform usage instructions",
    faqUsageA:
      "The USDT team has officially entered the digital asset trading service platform.\n" +
      "With reliable and scalable technical design, high-quality services and more support, the USDT digital asset trading platform aims to provide its special users with more convenient, safer and convenient USDT exchange transaction services and high-quality blockchain assets. Global VIP customers provide deposits, transfers, withdrawals, financial management and investment services. VIP exclusive financial management, investment and 24-hour customer service.\n\n" +
      "1. The platform is open for audience registration. Anyone can register their own account\n" +
      "2. The VIP level of the newly registered account is 0 (stored value, transfer, withdrawal, etc.). These are free and you don't need to upgrade your account to operate them. If your account needs to receive transfers from others, you need to use payment limits (at this time, level 0 accounts will not be able to receive payments), and you need to upgrade your account level to VIP to use the payment function; the higher the level, everyone’s daily and monthly allowances will be different, please upgrade as needed.\n" +
      "3. We can also provide various services such as currency exchange and USDT mortgage loans for VIP customers.",

    faqVipQ: "How to activate VIP",
    faqVipA:
      "1. Click the VIP button\n" +
      "2. Select the VIP level you want to purchase\n" +
      "3. Pay the VIP deposit and purchase successfully\n" +
      "4. Deposit required for VIP level (you can cancel at any time and get your deposit returned)\n\n" +
      "VIP1 deposit: 51 USDT (valid for 1 month, after 1 month the 51 USDT deposit will be automatically returned)\n" +
      "VIP2 deposit: 1498.5 USDT\n" +
      "VIP3 deposit: 3001 USDT\n" +
      "VIP4 deposit: 29998.5 USDT\n" +
      "VIP5 deposit: 50001 USDT\n" +
      "VIP6 deposit: 99998.5 USDT\n\n" +
      "VIP1: Payment limit 10 USDT per day and 50 USDT per month\n" +
      "VIP2: Payment limit 100 USDT per day and 3,000 USDT per month\n" +
      "VIP3: Payment limit 30,000 USDT per day and 900,000 USDT per month\n" +
      "VIP4: Payment limit 100,000 USDT per day and 3,000,000 USDT per month\n" +
      "VIP5: Payment limit 200,000 USDT per day and 6,000,000 USDT per month\n" +
      "VIP6: Payment limit 2,000,000 USDT per day and 60,000,000 USDT per month\n\n" +
      "To upgrade to VIP level, you must deposit the corresponding amount in USDT. Otherwise, the system will not recognize or activate the VIP level automatically.\n" +
      "If the deposited amount does not match the VIP level, the level will not be activated, and the deposit will be converted into balance. Your money will not be lost.\n\n" +
      "(This platform is a cryptocurrency holding and interest generation platform. After upgrading to VIP level, the deposited amount can be withdrawn with its interest after one month and continue as a deposit).",

    faqVipTransferQ: "VIP transfer (no KEY required)",
    faqVipTransferA:
      "Note: VIPs can use the platform transfer function. Transfers can only be made between platform VIPs (successful transfers cannot be returned)\n\n" +
      "1. Click the transfer button\n" +
      "2. Correctly filled in VIP username, email address and mobile phone number\n" +
      "3. Click Confirm to complete the transfer (no need to enter KEY)\n" +
      "4. If your account needs to receive transfers from others, you need to use payment limits\n\n" +
      "VIP1: 10 USDT/day and 50 USDT/month\n" +
      "VIP2: 100 USDT/day and 3,000 USDT/month\n" +
      "VIP3: 30,000 USDT/day and 900,000 USDT/month\n" +
      "VIP4: 100,000 USDT/day and 3,000,000 USDT/month\n" +
      "VIP5: 200,000 USDT/day and 6,000,000 USDT/month\n" +
      "VIP6: 2,000,000 USDT/day and 60,000,000 USDT/month\n\n" +
      "Transfer limit example: If your account is VIP5\n" +
      "VIP5 -> VIP1: 10 USDT\n" +
      "VIP5 -> VIP2: 100 USDT\n" +
      "VIP5 -> VIP3: 30,000 USDT\n" +
      "VIP5 -> VIP4: 100,000 USDT\n" +
      "VIP5 -> VIP5: 200,000 USDT\n" +
      "VIP6 -> VIP6: 2,000,000 USDT",

    faqStoreQ: "How to store value",
    faqStoreA:
      "1. Click the recharge button\n" +
      "2. Select the amount to be stored\n" +
      "3. Click Confirm. Enter (KEY)\n" +
      "4. You will get an exclusive stored value address for your account, which you can transfer from any exchange or wallet.\n" +
      "5. The amount of your stored value will be automatically added to your account balance",

    faqWithdrawQ: "How to withdraw cash",
    faqWithdrawA:
      "1. Click the Withdraw button\n" +
      "2. Enter the USDT withdrawal address (TRC20/ ERC20)\n" +
      "3. Enter the withdrawal amount\n" +
      "4. Click the Confirm button and enter KEY\n" +
      "5. The withdrawal is successful and your withdrawal will arrive within 2 hours.",

    faqForgetKeyQ: "What should I do if I forget my KEY?",
    faqForgetKeyA:
      "1. The KEY is set by yourself and cannot be obtained by others. The KEY is unique and cannot be reset.\n" +
      "2. KEY is the only proof of your account. It cannot be modified. Unable to retrieve\n" +
      "3. If you forget the KEY. If your account still has funds to withdraw, you can re-register a new account and upgrade VIP, and then transfer funds from your old account to your new account for withdrawal. No KEY is required for transfers within the VIP platform\n" +
      "4. For the safety of your account funds, internal transfers must be performed by the user himself. The platform customer service cannot help users with internal transfers.\n\n" +
      "KEY is the only credential for your account and cannot be modified or retrieved. In order to protect customer privacy, the platform will not record the user's account number, password, mobile phone number, email, or KEY. Please keep your login information safe",

    faqChangeQ: "How to change password, email",
    faqChangeA:
      "1. Click on my homepage\n" +
      "2. Click the Security Center button\n" +
      "3. Select the password or email that needs to be changed\n" +
      "4. Enter KEY to complete",

    faqRegisterQ: "How to register an account",
    faqRegisterA:
      "(Note: When registering, please do not open the translation software. If you open the translation software, the button will not be confirmed. If you cannot register, please change the browser)\n\n" +
      "1. Click the registration button on the homepage\n" +
      "2. Click to register\n" +
      "3. Fill in your registration information\n" +
      "4. Please keep it properly when setting the KEY. It cannot be modified or retrieved (loss may cause property damage)",

    faqInvestQ: "How to invest",
    faqInvestA:
      "Store safely and earn easily\n\n" +
      "1. Minimum storage amount: 5,000 USDT (account funds below 5,000 cannot access financial services)\n" +
      "2. Your assets will receive income according to different levels, and the total income at each level is added up.\n" +
      "3. The expected annualized income will be adjusted at any time based on the actual income of the mining pool.\n" +
      "4. The income will be calculated one day after PoS is opened.\n" +
      "5. No need to freeze mortgage assets, you can trade or withdraw coins at any time.\n\n" +
      "Earnings will start on T+1 (the next day) and will be distributed to your account on T+2.\n" +
      "No income will be generated on the day you release your pledged assets. Earnings will be distributed daily.\n" +
      "Financial management can be canceled at any time, and the income will be settled until the day before exiting PoS.\n" +
      "For other products, when the minimum storage period is reached, you can redeem or continue to store.\n" +
      "Among the financial products provided, you can choose from dozens of digital assets (such as Bitcoin, Ethereum) and stable coins.",

    faqVipFeesQ: "VIP investment services and annual fees",
    faqVipFeesA:
      "1. Thank you again for becoming our member, we will wholeheartedly provide you with better service and support!\n" +
      "2. You will get transfer and collection services\n" +
      "3. You will enjoy exclusive VIP rates and more favorable transaction costs.\n" +
      "4. You will receive a VIP privileged badge to show your identity and status.\n" +
      "5. You will receive regular industry reports to understand market dynamics and investment opportunities.\n" +
      "6. You will enjoy exclusive festive benefits and customized souvenir privileges.\n" +
      "7. You will have the opportunity to participate in exclusive VIP activities.\n" +
      "8. You will have exclusive 24-hour VIP customer service channel.\n" +
      "9. You will get an independent green channel and enjoy more convenient deposit and withdrawal services.\n" +
      "10. Higher level members can enjoy higher commissions. The annual fee for VIP4 and above members is based on the member registration date and is paid according to different VIP levels.",
    refundTitle: "Refund",
    amount: "Amount",
    network: "Network",
    cancel: "Cancel",
    confirm: "Confirm",
    refundHint: "Enter amount, choose network and confirm with Key Password.",
    depositTitle: "Deposit",
    records: "Records",
    depositTopWarning: "Recommended: use Bitget, OKX, Bybit or a hardware wallet for better convenience.",
    depositAmountPlaceholder: "Minimum deposit amount 0.00 USDT",
    depositHint: "Tip: You can buy USDT on (www.okx.com), (www.bybit.com), (www.bitget.com) or any other exchange. Transfer the required amount to your deposit address.",
    depositBottomWarning: "Funds have not arrived in your wallet. Please contact online support for help.",
    send: "Send",
    withdrawTitle: "Withdraw",
    balance: "Balance",
    walletAddress: "Wallet address",
    walletAddressPlaceholder: "Please enter wallet address",
    withdrawAmountPlaceholder: "5-10000000",
    withdrawHint: "Security tip: please enter the correct USDT address, otherwise funds cannot be recovered after transfer.",
    withdrawWarning: "After the withdrawal is completed, if you did not receive USDT, please contact customer service for help.",
    internalTransferTitle: "Internal Transfer",
    internalTransferBtn: "Internal Transfer",
    account: "Account",
    transferAccountPlaceholder: "Receiver must be at least Vip1",
    transferAmountPlaceholder: "Please enter transfer amount",
    transferVipNote: "VIP members can use transfer without key",
    transferLimitsTitle: "Transfer and receiving limits (Day)",
    membershipUpgradeTitle: "Membership Upgrade",
    membershipUpgradeHint: "Choose a VIP level and confirm the purchase with your Key Password.",
    purchase: "Purchase",
    vipDeposit: "Deposit",
    vipCollectionLine: "Collection limit for money transfer service",
    vipDayLimit: "Daily receiving limit",
    vipMonthLimit: "Monthly receiving limit",
    vipBuyHint: "Enter Key Password to confirm the purchase.",
    ourPartners: "Our Partners",
    trustedExchanges: "Trusted exchanges",
    depositRecordsTitle: "Deposit Records",
    withdrawRecordsTitle: "Withdraw Records",
    noRecordsYet: "No records yet.",
  },
  ru: {
    login: "Войти",
    register: "Регистрация",
    logout: "Выйти",
    profileSettings: "Настройки профиля",
    email: "Почта",
    password: "Пароль",
    name: "Имя",
    confirmPassword: "Повторите пароль",
    signIn: "Вход",
    createAccount: "Создать аккаунт",
    goToLogin: "Уже есть аккаунт?",
    goToRegister: "Нет аккаунта? Регистрация",
    welcome: "Добро пожаловать в свой аккаунт",
    guestTitle: "Крипто-кошелёк",
    guestText: "Войдите или зарегистрируйтесь, чтобы продолжить.",
    profile: "Профиль",
    myassetsUSDT: "Мои активы USDT",
    depositUSDT: "Внесите USDT",
    applyforrefund: "Возврат",
    menudeposit: "Deposit",
    "menu.deposit": "Пополнить",
    "menu.withdraw": "Вывести",
    "menu.transfer": "Внутренний перевод",
    "menu.upgrade": "Улучшить",
    usdtMarket: "Рынок USDT",
    currency: "Валюта",
    latestPrice: "Последняя цена",
    change24h: "Изм. за 24ч",
    loadingMarket: "Загрузка рынка…",
    guestDescTitle: "Почему C-Wallet?",
    guestDesc1Title: "Быстро и просто",
    guestDesc1Text: "Войдите за секунды и отслеживайте пары к USDT.",
    guestDesc2Title: "Рынок в реальном времени",
    guestDesc2Text: "Живые цены и изменение за 24ч обновляются мгновенно.",
    guestDesc3Title: "Безопасный подход",
    guestDesc3Text: "Сессия защищена, токены хранятся безопасно.",
    pleaseEnterUsername: "Пожалуйста, введите имя пользователя",
    pleaseEnterEmail: "Пожалуйста, введите email",
    pleaseEnterPhoneNumber: "Введите номер телефона",
    pleaseEnterPassword: "Пожалуйста, введите пароль",
    pleaseConfirmPasswordAgain: "Пожалуйста, подтвердите пароль ещё раз",
    pleaseEnterKeyPassword: "Пожалуйста, введите ключевой пароль",
    keyPasswordNote: "Примечание: ключевой пароль — это уникальный пароль вашего аккаунта. Его нельзя изменить или восстановить. Пожалуйста, храните его в безопасности!",
    pleaseConfirmKeyPasswordAgain: "Подтвердите ключевой пароль ещё раз",
    pleaseEnterVerification: "Введите код проверки",
    refreshCaptcha: "Обновить",
    passwordsDoNotMatch: "Пароли не совпадают",
    keyPasswordsDoNotMatch: "Ключевые пароли не совпадают",
    verificationIncorrect: "Код проверки неверный",
    code: "Код",
    pleaseEnterUsernameOrEmail: "Please Enter Username or Email",
    profileSettingsHint: "Обновите email, телефон и пароль.",
    confirmWithKeyPassword: "Подтвердите с помощью Key Password",
    contactInfo: "Контактные данные",
    phone: "Телефон",
    changePassword: "Сменить пароль",
    changePasswordHint: "Оставьте пустым, если не хотите менять.",
    newPassword: "Новый пароль",
    confirmChanges: "Подтвердить изменения",
    keyPasswordRequired: "Для сохранения изменений нужен Key Password.",
    keyPassword: "Key Password",
    saveChanges: "Сохранить изменения",
    back: "Назад",
    messagesHint: "Ваши уведомления и обновления.",
    messagesFromCWallet: "От C-Wallet",
    messagesEmpty: "Пока нет сообщений.",
    msgWelcomeTitle: "Добро пожаловать в C-Wallet",
    msgWelcomeText: "Рады видеть вас на нашей платформе. Начните с рынка USDT и возможностей кошелька.",
    msgSecurityTitle: "Напоминание о безопасности",
    msgSecurityText: "Никому не передавайте Key Password. Храните его в безопасности — восстановить нельзя.",
    msgJustNow: "Только что",
    msgToday: "Сегодня",
    fromCWallet: "От C-Wallet",
    fromSupport: "От поддержки",
    fromAdmin: "От администратора",
    quickBuy: "Быстрая покупка",
    qbWarning:
      "Этот сайт поддерживает только управление USDT, хранение и вывод. При пополнении выбирайте сеть USDT-TRX (USDT-TRC20). Если вы отправите USDT из других сетей, например USDT-ERC20 (USDT-ETH), на адрес этого сайта — средства не смогут быть восстановлены. Будьте внимательны.",
    qbPaxful: "Купить Tether (USDT) картой на Paxful",
    qbChangeNow: "Купить Tether (USDT) картой на ChangeNow",
    qbChangelly: "Купить Tether (USDT) картой на Changelly",
    qbBinance: "Купить Tether (USDT) картой на Binance",
    qbBybit: "Купить Tether (USDT) картой на Bybit",
    qbOKX: "Купить Tether (USDT) картой на OKX",
    helpCenter: "Справочный центр",
    helpCenterHint: "FAQ и инструкции по платформе.",

    faqUsageQ: "Инструкции по использованию платформы",
    faqUsageA:
      "Команда USDT официально запустила платформу сервисов торговли цифровыми активами.\n" +
      "Благодаря надёжной и масштабируемой технической архитектуре, качественным услугам и расширенной поддержке, платформа USDT направлена на то, чтобы предоставить пользователям более удобные и безопасные сервисы обмена USDT и работы с качественными блокчейн-активами. Для VIP-клиентов доступны пополнение, переводы, вывод, финансовое управление и инвестиционные сервисы. Эксклюзивные VIP-продукты, инвестиции и круглосуточная поддержка 24/7.\n\n" +
      "1. Платформа открыта для регистрации. Любой пользователь может зарегистрировать свой аккаунт.\n" +
      "2. VIP-уровень нового аккаунта — 0 (пополнение, перевод, вывод и т.д.). Эти функции бесплатны и не требуют повышения уровня. Если вашему аккаунту нужно принимать переводы от других пользователей, требуется функция лимитов платежей (на уровне 0 принимать платежи нельзя) — для этого нужно повысить уровень до VIP. Чем выше уровень, тем больше дневные и месячные лимиты — повышайте уровень по необходимости.\n" +
      "3. Для VIP-клиентов также доступны дополнительные услуги, например обмен валют и займы под залог USDT.",

    faqVipQ: "Как активировать VIP",
    faqVipA:
      "1. Нажмите кнопку VIP\n" +
      "2. Выберите VIP-уровень, который хотите приобрести\n" +
      "3. Оплатите VIP-депозит — покупка будет успешной\n" +
      "4. Для каждого VIP-уровня требуется депозит (вы можете отменить в любой момент и получить депозит обратно)\n\n" +
      "VIP1 депозит: 51 USDT (действует 1 месяц, через 1 месяц депозит 51 USDT автоматически вернётся на ваш аккаунт)\n" +
      "VIP2 депозит: 1498.5 USDT\n" +
      "VIP3 депозит: 3001 USDT\n" +
      "VIP4 депозит: 29998.5 USDT\n" +
      "VIP5 депозит: 50001 USDT\n" +
      "VIP6 депозит: 99998.5 USDT\n\n" +
      "VIP1: лимит платежей 10 USDT в день и 50 USDT в месяц\n" +
      "VIP2: лимит платежей 100 USDT в день и 3 000 USDT в месяц\n" +
      "VIP3: лимит платежей 30 000 USDT в день и 900 000 USDT в месяц\n" +
      "VIP4: лимит платежей 100 000 USDT в день и 3 000 000 USDT в месяц\n" +
      "VIP5: лимит платежей 200 000 USDT в день и 6 000 000 USDT в месяц\n" +
      "VIP6: лимит платежей 2 000 000 USDT в день и 60 000 000 USDT в месяц\n\n" +
      "Чтобы повысить VIP-уровень, необходимо внести соответствующую сумму в USDT. Иначе система не распознает и не активирует VIP-уровень автоматически.\n" +
      "Если внесённая сумма не соответствует выбранному VIP-уровню, уровень не будет активирован, а депозит будет зачислен в баланс. Ваши средства не пропадут.\n\n" +
      "(Эта платформа предназначена для хранения криптовалюты и получения процентов. После повышения до VIP-уровня внесённую сумму можно вывести вместе с процентами через один месяц и при желании продолжить использовать её как депозит).",

    faqVipTransferQ: "VIP-перевод (KEY не требуется)",
    faqVipTransferA:
      "Примечание: VIP-пользователи могут использовать функцию переводов на платформе. Переводы возможны только между VIP-аккаунтами платформы (успешные переводы не возвращаются)\n\n" +
      "1. Нажмите кнопку Transfer (перевод)\n" +
      "2. Корректно заполните VIP username, email и номер телефона получателя\n" +
      "3. Нажмите Confirm для завершения перевода (KEY вводить не нужно)\n" +
      "4. Если вашему аккаунту нужно принимать переводы от других пользователей, требуется функция лимитов платежей\n\n" +
      "VIP1: 10 USDT/день и 50 USDT/месяц\n" +
      "VIP2: 100 USDT/день и 3 000 USDT/месяц\n" +
      "VIP3: 30 000 USDT/день и 900 000 USDT/месяц\n" +
      "VIP4: 100 000 USDT/день и 3 000 000 USDT/месяц\n" +
      "VIP5: 200 000 USDT/день и 6 000 000 USDT/месяц\n" +
      "VIP6: 2 000 000 USDT/день и 60 000 000 USDT/месяц\n\n" +
      "Пример лимитов переводов: если ваш аккаунт VIP5\n" +
      "VIP5 -> VIP1: 10 USDT\n" +
      "VIP5 -> VIP2: 100 USDT\n" +
      "VIP5 -> VIP3: 30 000 USDT\n" +
      "VIP5 -> VIP4: 100 000 USDT\n" +
      "VIP5 -> VIP5: 200 000 USDT\n" +
      "VIP6 -> VIP6: 2 000 000 USDT",

    faqStoreQ: "Как пополнить (store value)",
    faqStoreA:
      "1. Нажмите кнопку Recharge (пополнение)\n" +
      "2. Выберите сумму пополнения\n" +
      "3. Нажмите Confirm и введите (KEY)\n" +
      "4. Вы получите персональный адрес пополнения для вашего аккаунта — можно переводить с любой биржи или кошелька.\n" +
      "5. Сумма пополнения будет автоматически добавлена на баланс аккаунта",

    faqWithdrawQ: "Как вывести средства",
    faqWithdrawA:
      "1. Нажмите кнопку Withdraw\n" +
      "2. Введите адрес вывода USDT (TRC20 / ERC20)\n" +
      "3. Введите сумму вывода\n" +
      "4. Нажмите Confirm и введите KEY\n" +
      "5. Вывод выполнен, средства поступят в течение 2 часов.",

    faqForgetKeyQ: "Что делать, если я забыл KEY?",
    faqForgetKeyA:
      "1. KEY задаёте вы сами — его нельзя получить у других. KEY уникален и не может быть сброшен.\n" +
      "2. KEY — единственное подтверждение вашего аккаунта. Его нельзя изменить и нельзя восстановить.\n" +
      "3. Если вы забыли KEY, но на аккаунте есть средства для вывода: вы можете заново зарегистрировать новый аккаунт, повысить VIP, затем перевести средства со старого аккаунта на новый для вывода. Для переводов внутри VIP-платформы KEY не требуется.\n" +
      "4. Для безопасности средств внутренние переводы должен выполнять сам пользователь. Служба поддержки платформы не может выполнять внутренние переводы за пользователя.\n\n" +
      "KEY — единственный идентификатор вашего аккаунта и не может быть изменён или восстановлен. Чтобы защитить конфиденциальность, платформа не хранит номер аккаунта, пароль, телефон, email или KEY. Пожалуйста, храните данные для входа в безопасности.",

    faqChangeQ: "Как изменить пароль или email",
    faqChangeA:
      "1. Перейдите на главную страницу (My homepage)\n" +
      "2. Нажмите кнопку Security Center\n" +
      "3. Выберите, что нужно изменить: пароль или email\n" +
      "4. Введите KEY для подтверждения",

    faqRegisterQ: "Как зарегистрировать аккаунт",
    faqRegisterA:
      "(Примечание: при регистрации не включайте переводчик в браузере. Если включить переводчик, кнопка подтверждения может не нажиматься. Если не получается зарегистрироваться — попробуйте другой браузер)\n\n" +
      "1. Нажмите кнопку Register на главной странице\n" +
      "2. Нажмите Register для создания аккаунта\n" +
      "3. Заполните регистрационные данные\n" +
      "4. При установке KEY сохраните его в надёжном месте — KEY нельзя изменить или восстановить (потеря может привести к финансовым потерям)",

    faqInvestQ: "Как инвестировать",
    faqInvestA:
      "Храните безопасно и зарабатывайте легко\n\n" +
      "1. Минимальная сумма хранения: 5 000 USDT (если средств меньше 5 000 — финансовые сервисы недоступны)\n" +
      "2. Активы приносят доход в зависимости от уровня, общий доход по уровню суммируется.\n" +
      "3. Ожидаемая годовая доходность может изменяться в любое время в зависимости от фактической доходности майнинг-пула.\n" +
      "4. Доход начинает рассчитываться через один день после открытия PoS.\n" +
      "5. Не нужно замораживать залоговые активы — вы можете торговать или выводить монеты в любое время.\n\n" +
      "Доход начисляется по схеме T+1 (на следующий день) и зачисляется на аккаунт на T+2.\n" +
      "В день вывода/разблокировки залога доход не начисляется. Доход распределяется на спотовый аккаунт ежедневно.\n" +
      "Финансовое управление можно отменить в любое время — доход будет рассчитан до дня, предшествующего выходу из PoS.\n" +
      "Для других продуктов после достижения минимального срока хранения вы можете погасить (redeem) или продолжить хранение.\n" +
      "Среди финансовых продуктов доступны десятки цифровых активов (например Bitcoin, Ethereum) и стейблкоины.",

    faqVipFeesQ: "VIP-инвестиционные сервисы и ежегодные сборы",
    faqVipFeesA:
      "1. Спасибо, что стали нашим участником — мы сделаем всё, чтобы предоставить вам лучший сервис и поддержку!\n" +
      "2. Вам будут доступны сервисы перевода и получения средств\n" +
      "3. Вы получите эксклюзивные VIP-тарифы и более выгодные комиссии.\n" +
      "4. Вы получите VIP-бейдж (значок) для подтверждения статуса.\n" +
      "5. Вы будете получать регулярные отраслевые отчёты о рынке и инвестиционных возможностях.\n" +
      "6. Вам будут доступны праздничные бонусы и индивидуальные сувенирные привилегии.\n" +
      "7. Вы сможете участвовать в эксклюзивных VIP-мероприятиях и знакомиться с успешными инвесторами.\n" +
      "8. У вас будет отдельный VIP-канал поддержки 24/7 с более быстрым приоритетным решением вопросов.\n" +
      "9. Вы получите «зелёный коридор» и более удобные сервисы пополнения и вывода.\n" +
      "10. У участников более высокого уровня могут быть более высокие комиссии. Ежегодная плата для VIP4 и выше рассчитывается от даты регистрации и оплачивается в зависимости от VIP-уровня.",
    refundTitle: "Возврат",
    amount: "Сумма",
    network: "Сеть",
    cancel: "Отмена",
    confirm: "Подтвердить",
    refundHint: "Введите сумму, выберите сеть и подтвердите Key Password.",
    depositTitle: "Пополнение",
    records: "Записи",
    depositTopWarning: "Рекомендуется использовать биржи Bitget, OKX, Bybit или аппаратный кошелёк для большего удобства.",
    depositAmountPlaceholder: "Минимальная сумма пополнения 0.00 USDT",
    depositHint: "Подсказка: вы можете купить USDT на (www.okx.com), (www.bybit.com), (www.bitget.com) или на любой другой бирже. Переведите нужную сумму на адрес пополнения.",
    depositBottomWarning: "Средства не поступили на ваш кошелёк. Пожалуйста, свяжитесь с онлайн-поддержкой для помощи.",
    send: "Отправить",
    withdrawTitle: "Вывести",
    balance: "Баланс",
    walletAddress: "Адрес кошелька",
    walletAddressPlaceholder: "Пожалуйста, введите адрес кошелька",
    withdrawAmountPlaceholder: "5-10000000",
    withdrawHint: "Совет по безопасности: пожалуйста, точно указывайте ваш USDT-адрес, иначе средства не смогут быть возвращены после перевода.",
    withdrawWarning: "После завершения вывода, если вы не получили USDT, пожалуйста, свяжитесь с обслуживанием клиентов для решения проблемы.",
    internalTransferTitle: "Внутренний перевод",
    internalTransferBtn: "Внутренний перевод",
    account: "Аккаунт",
    transferAccountPlaceholder: "Получатель должен быть как минимум Vip1",
    transferAmountPlaceholder: "Пожалуйста, введите сумму перевода",
    transferVipNote: "VIP-члены могут использовать перевод без ключа",
    transferLimitsTitle: "Лимит перевода и получения (дни)",
    membershipUpgradeTitle: "Повышение уровня членства",
    membershipUpgradeHint: "Выберите VIP-уровень и подтвердите покупку с помощью Key Password.",
    purchase: "Покупка",
    vipDeposit: "Депозит",
    vipCollectionLine: "Лимит получения для сервиса переводов",
    vipDayLimit: "Дневной лимит на получение",
    vipMonthLimit: "Месячный лимит на получение",
    vipBuyHint: "Введите Key Password для подтверждения покупки.",
    ourPartners: "Наши партнёры",
    trustedExchanges: "Надёжные биржи",
    depositRecordsTitle: "Записи пополнений",
    withdrawRecordsTitle: "Записи выводов",
    noRecordsYet: "Пока нет записей.",
  },
  de: {
    login: "Anmelden",
    register: "Registrieren",
    logout: "Abmelden",
    profileSettings: "Profileinstellungen",
    email: "E-Mail",
    password: "Passwort",
    name: "Name",
    confirmPassword: "Passwort bestätigen",
    signIn: "Anmelden",
    createAccount: "Konto erstellen",
    goToLogin: "Schon ein Konto?",
    goToRegister: "Kein Konto? Registrieren",
    welcome: "Willkommen in Ihrem Konto",
    guestTitle: "Krypto-Wallet",
    guestText: "Bitte anmelden oder registrieren, um fortzufahren.",
    profile: "Profil",
    myassetsUSDT: "Meine Vermögenswerte USDT",
    depositUSDT: "USDT einzahlen",
    applyforrefund: "Erstattung",
    "menu.deposit": "Einzahlen",
    "menu.withdraw": "Abheben",
    "menu.transfer": "Interner Transfer",
    "menu.upgrade": "Mitgliedschaft",
    usdtMarket: "USDT Markt",
    currency: "Währung",
    latestPrice: "Letzter Preis",
    change24h: "24h Änderung",
    loadingMarket: "Markt wird geladen…",
    guestDescTitle: "Warum C-Wallet?",
    guestDesc1Title: "Schnell & einfach",
    guestDesc1Text: "In Sekunden einloggen und USDT-Paare verfolgen.",
    guestDesc2Title: "Markt in Echtzeit",
    guestDesc2Text: "Live-Preise und 24h-Änderung werden sofort aktualisiert.",
    guestDesc3Title: "Sicheres Design",
    guestDesc3Text: "Deine Sitzung ist geschützt, Tokens werden sicher gespeichert.",
    pleaseEnterUsername: "Bitte Benutzernamen eingeben",
    pleaseEnterEmail: "Bitte E-Mail eingeben",
    pleaseEnterPhoneNumber: "Bitte Telefonnummer eingeben",
    pleaseEnterPassword: "Bitte Passwort eingeben",
    pleaseConfirmPasswordAgain: "Bitte Passwort erneut bestätigen",
    pleaseEnterKeyPassword: "Bitte Schlüsselpasswort eingeben",
    keyPasswordNote: "Hinweis: Das Schlüsselpasswort ist die eindeutige Zugangsdaten deines Kontos. Es kann nicht geändert oder wiederhergestellt werden. Bitte sicher aufbewahren!",
    pleaseConfirmKeyPasswordAgain: "Bitte Schlüsselpasswort erneut bestätigen",
    pleaseEnterVerification: "Verifizierungscode eingeben",
    refreshCaptcha: "Aktualisieren",
    passwordsDoNotMatch: "Passwörter stimmen nicht überein",
    keyPasswordsDoNotMatch: "Schlüsselpasswörter stimmen nicht überein",
    verificationIncorrect: "Verifizierungscode ist falsch",
    code: "Code",
    pleaseEnterUsernameOrEmail: "Please Enter Username or Email",
    profileSettingsHint: "E-Mail, Telefon und Passwort aktualisieren.",
    confirmWithKeyPassword: "Mit Key Password bestätigen",
    contactInfo: "Kontaktdaten",
    phone: "Telefon",
    changePassword: "Passwort ändern",
    changePasswordHint: "Leer lassen, wenn du es nicht ändern möchtest.",
    newPassword: "Neues Passwort",
    confirmChanges: "Änderungen bestätigen",
    keyPasswordRequired: "Zum Speichern der Änderungen ist ein Key Password erforderlich.",
    keyPassword: "Key Password",
    saveChanges: "Änderungen speichern",
    back: "Zurück",
    messagesHint: "Deine Benachrichtigungen und Updates.",
    messagesFromCWallet: "Von C-Wallet",
    messagesEmpty: "Noch keine Nachrichten.",
    msgWelcomeTitle: "Willkommen bei C-Wallet",
    msgWelcomeText: "Schön, dass du da bist. Entdecke den USDT-Markt und die Wallet-Funktionen.",
    msgSecurityTitle: "Sicherheitshinweis",
    msgSecurityText: "Teile dein Key Password niemals. Bewahre es sicher auf – es kann nicht wiederhergestellt werden.",
    msgJustNow: "Gerade eben",
    msgToday: "Heute",
    fromCWallet: "Von C-Wallet",
    fromSupport: "Vom Support",
    fromAdmin: "Vom Admin",
    quickBuy: "Schnell kaufen",
    qbWarning:
      "Diese Seite unterstützt nur die Verwaltung, Aufbewahrung und Auszahlung von USDT. Beim Einzahlen wähle bitte das USDT-TRX (USDT-TRC20) Netzwerk. Wenn du USDT aus anderen Netzwerken (z. B. USDT-ERC20/USDT-ETH) an diese Adresse sendest, können die Assets nicht wiederhergestellt werden. Bitte beachten.",
    qbPaxful: "Tether (USDT) mit Karte bei Paxful kaufen",
    qbChangeNow: "Tether (USDT) mit Karte bei ChangeNow kaufen",
    qbChangelly: "Tether (USDT) mit Karte bei Changelly kaufen",
    qbBinance: "Tether (USDT) mit Karte bei Binance kaufen",
    qbBybit: "Tether (USDT) mit Karte bei Bybit kaufen",
    qbOKX: "Tether (USDT) mit Karte bei OKX kaufen",
    helpCenter: "Hilfe-Center",
    helpCenterHint: "FAQ und Plattform-Anleitungen.",

    faqUsageQ: "Anleitung zur Nutzung der Plattform",
    faqUsageA:
      "Das USDT-Team ist offiziell in die Plattform für den Handel mit digitalen Assets eingestiegen.\n" +
      "Mit einem zuverlässigen und skalierbaren technischen Design, hochwertigen Services und mehr Support zielt die USDT-Plattform darauf ab, speziellen Nutzern bequemere und sicherere USDT-Transaktionsdienste sowie hochwertige Blockchain-Assets bereitzustellen. Für globale VIP-Kunden bietet die Plattform Einzahlungen, Transfers, Auszahlungen, Finanzmanagement und Investment-Services. Exklusive VIP-Finanzprodukte, Investments und 24/7-Kundensupport.\n\n" +
      "1. Die Plattform ist für Registrierungen geöffnet. Jeder kann ein eigenes Konto registrieren.\n" +
      "2. Das VIP-Level eines neu registrierten Kontos ist 0 (Aufladen, Transfer, Auszahlung usw.). Diese Funktionen sind kostenlos und erfordern kein Upgrade. Wenn dein Konto Transfers von anderen empfangen muss, benötigst du Zahlungs-/Empfangslimits (Level-0-Konten können keine Zahlungen empfangen). Dafür musst du dein Konto auf VIP upgraden. Je höher das Level, desto höher sind die täglichen und monatlichen Limits – bitte nach Bedarf upgraden.\n" +
      "3. Wir können VIP-Kunden außerdem verschiedene Services anbieten, z. B. Währungsumtausch und USDT-Darlehen gegen Hinterlegung.",

    faqVipQ: "Wie aktiviert man VIP",
    faqVipA:
      "1. Klicke auf die VIP-Schaltfläche\n" +
      "2. Wähle das VIP-Level, das du kaufen möchtest\n" +
      "3. Zahle das VIP-Deposit – Kauf erfolgreich\n" +
      "4. Für jedes VIP-Level ist ein Deposit erforderlich (du kannst jederzeit kündigen und dein Deposit zurückerhalten)\n\n" +
      "VIP1-Deposit: 51 USDT (gültig 1 Monat; nach 1 Monat wird das 51-USDT-Deposit automatisch auf dein Konto zurückgebucht)\n" +
      "VIP2-Deposit: 1498.5 USDT\n" +
      "VIP3-Deposit: 3001 USDT\n" +
      "VIP4-Deposit: 29998.5 USDT\n" +
      "VIP5-Deposit: 50001 USDT\n" +
      "VIP6-Deposit: 99998.5 USDT\n\n" +
      "VIP1: Zahlungslimit 10 USDT pro Tag und 50 USDT pro Monat\n" +
      "VIP2: Zahlungslimit 100 USDT pro Tag und 3.000 USDT pro Monat\n" +
      "VIP3: Zahlungslimit 30.000 USDT pro Tag und 900.000 USDT pro Monat\n" +
      "VIP4: Zahlungslimit 100.000 USDT pro Tag und 3.000.000 USDT pro Monat\n" +
      "VIP5: Zahlungslimit 200.000 USDT pro Tag und 6.000.000 USDT pro Monat\n" +
      "VIP6: Zahlungslimit 2.000.000 USDT pro Tag und 60.000.000 USDT pro Monat\n\n" +
      "Um auf ein VIP-Level upzugraden, musst du den entsprechenden Betrag in USDT einzahlen. Andernfalls erkennt oder aktiviert das System das VIP-Level nicht automatisch.\n" +
      "Wenn der eingezahlte Betrag nicht zum VIP-Level passt, wird das Level nicht aktiviert und das Deposit wird in Guthaben umgewandelt. Dein Geld geht nicht verloren.\n\n" +
      "(Diese Plattform ist eine Krypto-Halte- und Zinsplattform. Nach dem Upgrade auf ein VIP-Level kann der eingezahlte Betrag nach einem Monat zusammen mit den Zinsen abgehoben werden und anschließend weiter als Deposit genutzt werden.)",

    faqVipTransferQ: "VIP-Transfer (KEY nicht erforderlich)",
    faqVipTransferA:
      "Hinweis: VIPs können die Transfer-Funktion der Plattform nutzen. Transfers sind nur zwischen VIP-Konten der Plattform möglich (erfolgreiche Transfers können nicht zurückerstattet werden).\n\n" +
      "1. Klicke auf die Transfer-Schaltfläche\n" +
      "2. Fülle Benutzername (VIP), E-Mail-Adresse und Telefonnummer korrekt aus\n" +
      "3. Klicke auf Confirm, um den Transfer abzuschließen (KEY ist nicht erforderlich)\n" +
      "4. Wenn dein Konto Transfers von anderen empfangen muss, benötigst du Zahlungslimits\n\n" +
      "VIP1: 10 USDT/Tag und 50 USDT/Monat\n" +
      "VIP2: 100 USDT/Tag und 3.000 USDT/Monat\n" +
      "VIP3: 30.000 USDT/Tag und 900.000 USDT/Monat\n" +
      "VIP4: 100.000 USDT/Tag und 3.000.000 USDT/Monat\n" +
      "VIP5: 200.000 USDT/Tag und 6.000.000 USDT/Monat\n" +
      "VIP6: 2.000.000 USDT/Tag und 60.000.000 USDT/Monat\n\n" +
      "Beispiel für Transfer-Limits: Wenn dein Konto VIP5 ist\n" +
      "VIP5 -> VIP1: 10 USDT\n" +
      "VIP5 -> VIP2: 100 USDT\n" +
      "VIP5 -> VIP3: 30.000 USDT\n" +
      "VIP5 -> VIP4: 100.000 USDT\n" +
      "VIP5 -> VIP5: 200.000 USDT\n" +
      "VIP6 -> VIP6: 2.000.000 USDT",

    faqStoreQ: "Wie kann man aufladen (Store Value)",
    faqStoreA:
      "1. Klicke auf die Recharge-Schaltfläche\n" +
      "2. Wähle den Betrag, der aufgeladen werden soll\n" +
      "3. Klicke auf Confirm und gib (KEY) ein\n" +
      "4. Du erhältst eine exklusive Einzahlungsadresse für dein Konto, auf die du von jeder Börse oder Wallet senden kannst.\n" +
      "5. Der Aufladebetrag wird automatisch deinem Kontoguthaben hinzugefügt",

    faqWithdrawQ: "Wie kann man auszahlen",
    faqWithdrawA:
      "1. Klicke auf die Withdraw-Schaltfläche\n" +
      "2. Gib die USDT-Auszahlungsadresse ein (TRC20 / ERC20)\n" +
      "3. Gib den Auszahlungsbetrag ein\n" +
      "4. Klicke auf Confirm und gib KEY ein\n" +
      "5. Auszahlung erfolgreich – deine Auszahlung kommt innerhalb von 2 Stunden an.",

    faqForgetKeyQ: "Was soll ich tun, wenn ich meinen KEY vergessen habe?",
    faqForgetKeyA:
      "1. Der KEY wird von dir selbst festgelegt und kann von anderen nicht erlangt werden. Der KEY ist einzigartig und kann nicht zurückgesetzt werden.\n" +
      "2. KEY ist der einzige Nachweis für dein Konto. Er kann nicht geändert und nicht wiederhergestellt werden.\n" +
      "3. Wenn du den KEY vergisst und dein Konto noch Guthaben zum Abheben hat, kannst du ein neues Konto registrieren, VIP upgraden und anschließend Guthaben vom alten Konto auf das neue übertragen, um auszuzahlen. Für Transfers innerhalb der VIP-Plattform ist kein KEY erforderlich.\n" +
      "4. Aus Sicherheitsgründen müssen interne Transfers vom Nutzer selbst durchgeführt werden. Der Kundensupport kann Nutzern bei internen Transfers nicht helfen.\n\n" +
      "KEY ist die einzige Zugangsdaten für dein Konto und kann nicht geändert oder wiederhergestellt werden. Zum Schutz der Privatsphäre speichert die Plattform keine Kontonummer, kein Passwort, keine Telefonnummer, keine E-Mail und keinen KEY. Bitte bewahre deine Login-Daten sicher auf.",

    faqChangeQ: "Wie kann man Passwort oder E-Mail ändern",
    faqChangeA:
      "1. Klicke auf die Startseite (My homepage)\n" +
      "2. Klicke auf die Schaltfläche Security Center\n" +
      "3. Wähle das Passwort oder die E-Mail aus, die geändert werden soll\n" +
      "4. Gib KEY ein, um abzuschließen",

    faqRegisterQ: "Wie registriert man ein Konto",
    faqRegisterA:
      "(Hinweis: Öffne bei der Registrierung bitte keine Übersetzungssoftware im Browser. Wenn du sie öffnest, kann der Bestätigungs-Button nicht funktionieren. Wenn du dich nicht registrieren kannst, wechsle bitte den Browser.)\n\n" +
      "1. Klicke auf der Startseite auf Register\n" +
      "2. Klicke auf Register, um zu registrieren\n" +
      "3. Fülle deine Registrierungsdaten aus\n" +
      "4. Bewahre den KEY sicher auf. Er kann nicht geändert oder wiederhergestellt werden (Verlust kann zu finanziellem Schaden führen)",

    faqInvestQ: "Wie investiert man",
    faqInvestA:
      "Sicher aufbewahren und einfach verdienen\n\n" +
      "1. Mindest-Aufladebetrag: 5.000 USDT (unter 5.000 USDT sind Finanzdienste nicht verfügbar)\n" +
      "2. Deine Assets erhalten Erträge je nach Level; die Gesamterträge pro Level werden addiert.\n" +
      "3. Die erwartete annualisierte Rendite kann jederzeit basierend auf den tatsächlichen Erträgen des Mining-Pools angepasst werden.\n" +
      "4. Die Erträge werden einen Tag nach Aktivierung von PoS berechnet.\n" +
      "5. Keine Sperrung von Sicherheiten nötig – du kannst jederzeit handeln oder Coins abheben.\n\n" +
      "Erträge starten an T+1 (am nächsten Tag) und werden an T+2 deinem Konto gutgeschrieben.\n" +
      "Am Tag der Freigabe der gestakten Assets werden keine Erträge generiert. Erträge werden täglich auf dein Spot-Konto verteilt.\n" +
      "Finanzmanagement kann jederzeit gekündigt werden; Erträge werden bis zum Tag vor dem Ausstieg aus PoS berechnet.\n" +
      "Bei anderen Produkten kannst du nach Erreichen der Mindestlaufzeit entweder einlösen (redeem) oder weiter halten.\n" +
      "Unter den Finanzprodukten kannst du aus Dutzenden digitalen Assets (z. B. Bitcoin, Ethereum) und Stablecoins wählen.",

    faqVipFeesQ: "VIP-Investment-Services und Jahresgebühren",
    faqVipFeesA:
      "1. Vielen Dank, dass du Mitglied geworden bist – wir bieten dir von Herzen besseren Service und Support!\n" +
      "2. Du erhältst Transfer- und Empfangsservices\n" +
      "3. Du profitierst von exklusiven VIP-Raten und günstigeren Transaktionskosten.\n" +
      "4. Du erhältst ein VIP-Abzeichen, um Identität und Status zu zeigen.\n" +
      "5. Du erhältst regelmäßige Branchenberichte, um Marktdynamik und Investmentchancen zu verstehen.\n" +
      "6. Du erhältst exklusive Feiertagsvorteile und personalisierte Souvenir-Privilegien.\n" +
      "7. Du kannst an exklusiven VIP-Aktivitäten teilnehmen und erfolgreiche Investoren kennenlernen.\n" +
      "8. Du erhältst einen exklusiven 24-Stunden-VIP-Supportkanal mit schnellerer, priorisierter Lösung.\n" +
      "9. Du erhältst einen unabhängigen „Green Channel“ und bequemere Ein- und Auszahlungsservices.\n" +
      "10. Mitglieder höherer Stufen können höhere Provisionen erhalten. Die Jahresgebühr für VIP4 und höher basiert auf dem Registrierungsdatum und wird je nach VIP-Level bezahlt.",
    refundTitle: "Rückerstattung",
    amount: "Betrag",
    network: "Netzwerk",
    cancel: "Abbrechen",
    confirm: "Bestätigen",
    refundHint: "Betrag eingeben, Netzwerk wählen und mit Key Password bestätigen.",
    depositTitle: "Einzahlung",
    records: "Einträge",
    depositTopWarning: "Empfohlen: Nutze Bitget, OKX, Bybit oder eine Hardware-Wallet für mehr Komfort.",
    depositAmountPlaceholder: "Mindesteinzahlung 0.00 USDT",
    depositHint: "Tipp: Du kannst USDT auf (www.okx.com), (www.bybit.com), (www.bitget.com) oder jeder anderen Börse kaufen. Sende den benötigten Betrag an deine Einzahlungsadresse.",
    depositBottomWarning: "Guthaben ist nicht in deiner Wallet angekommen. Bitte kontaktiere den Online-Support.",
    send: "Senden",
    withdrawTitle: "Auszahlen",
    balance: "Kontostand",
    walletAddress: "Wallet-Adresse",
    walletAddressPlaceholder: "Bitte Wallet-Adresse eingeben",
    withdrawAmountPlaceholder: "5-10000000",
    withdrawHint: "Sicherheitshinweis: Bitte gib die USDT-Adresse korrekt ein, sonst können die Mittel nach der Überweisung nicht wiederhergestellt werden.",
    withdrawWarning: "Wenn du nach Abschluss der Auszahlung kein USDT erhalten hast, kontaktiere bitte den Kundenservice.",
    internalTransferTitle: "Interner Transfer",
    internalTransferBtn: "Interner Transfer",
    account: "Konto",
    transferAccountPlaceholder: "Empfänger muss mindestens Vip1 sein",
    transferAmountPlaceholder: "Bitte Transferbetrag eingeben",
    transferVipNote: "VIP-Mitglieder können Transfer ohne Key nutzen",
    transferLimitsTitle: "Transfer- und Empfangslimits (Tag)",
    membershipUpgradeTitle: "Mitgliedschaft upgraden",
    membershipUpgradeHint: "Wähle ein VIP-Level und bestätige den Kauf mit deinem Key Password.",
    purchase: "Kaufen",
    vipDeposit: "Deposit",
    vipCollectionLine: "Empfangslimit für den Transfer-Service",
    vipDayLimit: "Tägliches Empfangslimit",
    vipMonthLimit: "Monatliches Empfangslimit",
    vipBuyHint: "Gib dein Key Password ein, um den Kauf zu bestätigen.",
    ourPartners: "Unsere Partner",
    trustedExchanges: "Vertrauenswürdige Börsen",
    depositRecordsTitle: "Einzahlungsverlauf",
    withdrawRecordsTitle: "Auszahlungsverlauf",
    noRecordsYet: "Noch keine Einträge.",
  },
};
