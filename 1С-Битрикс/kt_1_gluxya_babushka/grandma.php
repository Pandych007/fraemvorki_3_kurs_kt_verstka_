<?php
echo "ЧЕГО СКАЗАТЬ-ТО ХОТЕЛ, МИЛОК?!" . PHP_EOL;

while (true) {
    $input = trim(fgets(STDIN));

    if (strtoupper($input) === 'ПОКА!') {
        echo "ДО СВИДАНИЯ, МИЛЫЙ!" . PHP_EOL;
        break;
    }

    if (preg_match('/[А-ЯЁ\s]+\!$/u', $input)) {
        $year = rand(1930, 1950);
        echo "НЕТ, НИ РАЗУ С $year ГОДА!" . PHP_EOL;
    } else {
        echo "АСЬ?! ГОВОРИ ГРОМЧЕ, ВНУЧЕК!" . PHP_EOL;
    }
}
?>
