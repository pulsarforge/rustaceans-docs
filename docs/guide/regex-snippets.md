# Regex Snippets
````rust
use regex::Regex;

pub fn number_literal() {
    let text = r#"print("hoge")\n#      this is comment\na = 1\na += 2"#;
    let re = Regex::new(r"(0x[0-9a-fA-F]([0-9a-fA-F]|\.)*|\d(\d|\.)*)([uU][lL]{0,2}|([eE][-+]\d*)?[fFlL]*)")
            .unwrap();
    re.find(text);
}

pub fn number_literal_match() {
    let text = r#"print("hoge")\n#      this is comment\na = 1\na += 2"#;
    let re = Regex::new(r"^(0x[0-9a-fA-F]([0-9a-fA-F]|\.)*|\d(\d|\.)*)([uU][lL]{0,2}|([eE][-+]\d*)?[fFlL]*)")
            .unwrap();
    re.find(text);
}

pub fn number_literal_match2() {
    let text = r#"print("hoge")\n#      this is comment\na = 1\na += 2"#;
    let re = Regex::new(r"^((0x[0-9a-fA-F]([0-9a-fA-F]|\.)*|\d(\d|\.)*)([uU][lL]{0,2}|([eE][-+]\d*)?[fFlL]*))")
            .unwrap();
    re.find(text);
}
````